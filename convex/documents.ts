import {v} from 'convex/values';

import {mutation, query} from "./_generated/server";
import {Doc, Id} from "./_generated/dataModel";


export const create = mutation({
  args: {
    title: v.string(),
    parentDocument: v.optional(v.id("documents")),
  },
  handler: async (ctx, args) => {

  }
})