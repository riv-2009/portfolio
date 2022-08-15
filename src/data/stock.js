import stock from "../images/stock/stock.png";
import stock1 from "../images/stock/stock1.png";
import stock2 from "../images/stock/stock2.png";
import stock3 from "../images/stock/stock3.png";
import stock4 from "../images/stock/stock4.png";

const stockApp = [
    {
        title:"" ,
        subtitle:"A game simulating how to invest in the stock market by looking at prior data."
            ,
        images:[stock, stock1, stock2, stock3, stock4] ,
        desc: "This stock investing practice app was coded in c#, entity framework, and mysql on the server side and the client side ui was coded in react and used bootstrap and material ui. The goal of this project was to simulate how your investments would perform if you bought stock on a random consective days in the past, you have the choice to buy, sell, hold, or quit the game early and try to see if you make or lose money over that period. The project used polygon.io to make api calls against in order to get the historical data of the stock ticker that you select. The program used asynchronous communication through signalr to send data. The ui also had three options to enter data to buy or sell the stock, they were through a slider, input box and pie chart."
          ,
        snippets: [        `
        I wrote the code in react, this section implement's a slider that synced up with the input 
        box and pie chart so the user could use any three of the options to adjust stock 
        shares to purchase.

        import * as React from "react";
        import Box from "@mui/material/Box";
        import Slider from "@mui/material/Slider";

        const StockSlider = ({ sharesPurchased, shares, Value, setValue, Action }) => {
            return (
                <Box width={300}>
                    {Action == "buy" && (
                        <Slider
                            value={Value}
                            aria-label="Default"
                            valueLabelDisplay="auto"
                            max={Math.trunc(shares)}
                            onChange={(e) => {
                                setValue(e.target.value);
                            }}
                        />
                    )}
                    {Action == "sell" && (
                        <Slider
                            value={Value}
                            aria-label="Default"
                            valueLabelDisplay="auto"
                            max={Math.trunc(sharesPurchased)}
                            onChange={(e) => {
                                setValue(e.target.value);
                            }}
                        />
                    )}
                </Box>
            );
        };
        export default StockSlider;
    `,
        `
        I wrote the code in this section using Signalr C# version, it's triggered when the user selects
        to purchase or sell shares of stock. Then it make an api call to polygon.io to get 
        stock data for random consecutive 14 day's within the last two years and then returns 
        the price to the signalr client.

        using Microsoft.AspNetCore.SignalR;
        using Newtonsoft.Json;
        using RestSharp;
        using StockInvesting.Models;
        using StockInvesting.Controllers;

        namespace StockInvesting.Hubs
        {
            public class StockHub: Hub<IStockHubClient>
            {
                public async Task StockTickerMessage(string message)
                {
                    //randomDay.GetRandomDay()
                    //Returns a random day between (august 1, 2020 and febuary 5, 2022)
                    RandomDay randomDay = new RandomDay();
                    DateTime date = randomDay.GetRandomDay();

                    string url = $"https://api.polygon.io/v2/aggs/ticker/" +
                        $"{message.ToUpper()}/range/1/day/{date.ToString("yyyy-MM-dd")}/" +
                        $"{date.AddDays(14).ToString("yyyy-MM-dd")}?apiKey=IIrxKiZhCrJaV0LKZpUVYatFWopiLbxO";

                    var client = new RestClient(url);
                    var request = new RestRequest();
                    var response = await client.GetAsync(request);

                    message = response.Content;

                    await Clients.All.ReceiveMessage(message);
                }
            }
        }
   
    `
        ,
        ],
    },
];

export default stockApp;