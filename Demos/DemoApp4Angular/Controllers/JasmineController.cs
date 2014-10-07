using System;
using System.Web.Mvc;

namespace DemoApp4Angular.Controllers
{
    public class JasmineController : Controller
    {
        public ViewResult Run()
        {
            return View("SpecRunner");
        }
    }
}
