import { makeSchema } from 'nexus';
import { join } from 'path';
import * as types from './types';

export const schema = makeSchema({
  types,
  outputs: {
    typegen: join(process.cwd(), './generated/nexus-typegen.d.ts'),
    schema: join(process.cwd(), './generated/schema.graphql'),
  },
  contextType: {
    export: 'Context',
    module: join(process.cwd(), './types/Context.ts'),
  },
});
