using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PartnerController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PartnerController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("add")]
        public async Task<IActionResult> AddPartner([FromBody] Partner partner)
        {
            if (!ModelState.IsValid)
                return BadRequest("Nieprawidłowe dane.");

            _context.Partnerzy.Add(partner);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Partner został dodany." });
        }
    }

}
