using WebApi_first.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;

namespace WebApi_first.Controllers
{
    public class ProductsController : ApiController
    {
        private WebApi_firstContext db = new WebApi_firstContext();



        // GET: api/Product
        public IQueryable<Product> GetProducts()
        {
            //db.Products.Add(tomato);
            return db.Products;
        }


        // GET: api/Product/5
        [ResponseType(typeof(Product))]
        public IHttpActionResult GetProduct(int id)
        {

            Product product = db.Products.Find(id);

            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }


        // POST: api/Product
        [ResponseType(typeof(Todo))]
        public IHttpActionResult PostProduct (Product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Products.Add(product);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = product.Id }, product);
        }

    }
}