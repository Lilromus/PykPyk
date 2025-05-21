using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AuthController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(User user)
        {
            if (!user.Email.Contains("@") || !user.Email.Contains("."))
            {
                return BadRequest(new { message = "Nieprawidłowy format adresu email." });
            }

            var existingUser = await _context.Users
                .FirstOrDefaultAsync(u => u.Email == user.Email || u.Login == user.Login);

            if (existingUser != null)
            {
                return BadRequest(new { message = "Użytkownik z podanym loginem lub adresem email już istnieje." });
            }

            user.Password = HashPassword(user.Password);

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Rejestracja zakończona sukcesem." });
        }



        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            if (string.IsNullOrEmpty(request.Login) || string.IsNullOrEmpty(request.Password))
            {
                return BadRequest(new { message = "Login i Password są wymagane" });
            }

            var user = await _context.Users
                .FirstOrDefaultAsync(u => u.Login == request.Login);

            if (user == null)
            {
                return Unauthorized(new { message = "Nieprawidłowy login lub hasło" });
            }

            var hashedPassword = HashPassword(request.Password);
            if (user.Password != hashedPassword)
            {
                return Unauthorized(new { message = "Nieprawidłowy login lub hasło" });
            }

            return Ok(new { message = "Zalogowano pomyślnie", userId = user.Id });
        }


        private string HashPassword(string password)
        {
            using var sha256 = SHA256.Create();
            var bytes = Encoding.UTF8.GetBytes(password);
            var hash = sha256.ComputeHash(bytes);
            return Convert.ToBase64String(hash);
        }
    }
}
