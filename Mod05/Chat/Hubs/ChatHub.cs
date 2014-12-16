using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Chat.Hubs
{
    public class ChatHub: Hub
    {

        public void SendMessage(string message)
        {

            Clients.All.Broadcast(message);
        }
    }
}