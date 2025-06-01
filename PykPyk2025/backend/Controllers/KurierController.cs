using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class KurierController : ControllerBase
    {
        private readonly AppDbContext _context;

        public KurierController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("add")]
        public async Task<IActionResult> AddKurier([FromBody] Kurier kurier)
        {
            if (string.IsNullOrWhiteSpace(kurier.Imie) ||
                string.IsNullOrWhiteSpace(kurier.Nazwisko) ||
                string.IsNullOrWhiteSpace(kurier.Miasto) ||
                kurier.Wiek < 18 ||
                string.IsNullOrWhiteSpace(kurier.Pojazd))
            {
                return BadRequest(new { message = "Błędne dane kuriera." });
            }

            _context.Kurierzy.Add(kurier);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Kurier zapisany." });
        }
    }

}
