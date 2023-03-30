import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { dataSource } from '../../app.module';

@ValidatorConstraint({ async: true })
export class UniqueOnDatabaseExistConstraint
  implements ValidatorConstraintInterface
{
  async validate(value: any, args: ValidationArguments) {
    const entity = args.object[`class_entity_${args.property}`];
    const UserRepository = dataSource.getRepository(entity);
    return UserRepository.count({ where: { email: value } }).then(
      (count) => count < 1,
    );
  }
}

export function UniqueOnDatabase(
  entity: any,
  validationOptions?: ValidationOptions,
) {
  validationOptions = {
    ...{ message: '$value already exists. Choose another.' },
    ...validationOptions,
  };
  return function (object: any, propertyName: string) {
    object[`class_entity_${propertyName}`] = entity;
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: UniqueOnDatabaseExistConstraint,
    });
  };
}
