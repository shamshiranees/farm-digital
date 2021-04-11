// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { QandA, User, Project } = initSchema(schema);

export {
  QandA,
  User,
  Project
};