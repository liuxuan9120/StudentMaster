﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StudentMaster.BLL.Interfaces;

namespace StudentMaster.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IAdminService  _adminService;

        public AdminController(IAdminService adminService)
        {
            _adminService = adminService;
        }

        [HttpGet("get-all-classes")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> getAllClasses()
        {
            Thread.Sleep(1000);
    
            return Ok(await _adminService.getAllClasses());
        }

        [HttpGet("invite-user/{email}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> inviteUser(string email)
        {
            Thread.Sleep(1000);
            try
            {
                if (await _adminService.inviteUser(email))
                    return Ok(new { msg = "Ok" });
                else
                    return BadRequest();
            }
            catch (Exception e)
            {

                return BadRequest(e.Data["ERROR"]);
            }
        }
        [HttpGet("invite-user/{email}/{classId}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> inviteUser(string email, int classId)
        {
            Thread.Sleep(1000);
            try
            {
                if (await _adminService.inviteUser(email, classId))
                    return Ok(new { msg = "Ok" });
                else
                    return BadRequest();
            }
            catch (Exception e)
            {

                return BadRequest(e.Data["ERROR"]);
            }

        }
    }
}