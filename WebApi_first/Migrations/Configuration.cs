using WebApi_first.Models;

namespace WebApi_first.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<WebApi_first.Models.WebApi_firstContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(WebApi_first.Models.WebApi_firstContext context)
        {

            context.Todoes.AddOrUpdate(x => x.Id, new Todo(){ Id = 1, Title = "Waesche machen.", isDone = false});
            context.Products.AddOrUpdate(x => x.Id, new Product() { Id = 1, Name = "Tomato Soup", Category = "Groceries", Price = 1 });
        }
    }
}
