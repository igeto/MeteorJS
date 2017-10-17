Recipes = new Meteor.Collection('recipes');

Recipes.allow({
    insert: function(userId, doc) {
       return !!userId;
    }
});

RecipeSchema = new SimpleSchema({
    name: {
        type: String,
        label: 'Name'
    },
    description: {
        type: String,
        label: 'Description'
    },
    author: {
        type: String,
        label: 'Author',
        autoValue: () => this.userId,
        autoform: {
            type: 'hidden'
        }
    },
    createdAt: {
        type: Date,
        label: 'Created At',
        autoValue: () => new Date,
        autoform: {
            type: 'hidden'
        }
    }
});

Recipes.attachSchema(RecipeSchema);