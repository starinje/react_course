using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace Solution;


public class Item
{
  public string sku;
  public string category;
}

public class Forecaster
{
  private string ConnectionString;

  public Forecaster()
  {
    ConnectionString = "Server=DATA_SQLEXPRESS;Database=;User Id=fcst_user;Password=fcst_password;";
  }

  public IList<double> predictNextWeek(List<Item> items)
  {
    List<double> forecasts = new List<double>();


    foreach (Item item in items)
    {
      int days = 20;
      // turn into enum - actually OOP this
      if (item.category == "book")
      {
        days = 3;
      }
      else if (item.category == "tv")
      {
        days = 4;
      }

      List<int> history = new List<int>();

      // Assume the database always has at least days worth of data,
      // and zeros are represented.
      string query = "SELECT DAY, ORDER_QUANTITY FROM DAILY_ORDERS WHERE SKU = '" +
          item.sku +
          "' AND DAY >= DATE(NOW()) - " +
          days +
          " AND DAY < DATE(NOW()) ORDER BY DAY";

      using (SqlConnection srcConn = new SqlConnection(ConnectionString))
      using (SqlCommand srcCmd = new SqlCommand(query, srcConn))
      {
        srcConn.Open();
        using (SqlDataReader reader = srcCmd.ExecuteReader())
        {
          while (reader.Read())
          {
            history.Add(reader.GetInt32(1));
          }
        }
      }

      double forecast = 0.0;
      if (item.category == "cd")
      {
        double alpha = 0.3;
        forecast = history[0];
        for (int i = 1; i < history.Count; ++i)
        {
          forecast = alpha * history[i] + (1 - alpha) * forecast;
        }
      }
      else
      {
        foreach (int v in history)
        {
          forecast += v;
        }
        forecast /= days;
      }
      forecasts.Add(forecast);
    }

    return forecasts;
  }
}



// IGNORE - HackerRank automatically adds this.
class Solution
{
  static void Main(string[] args)
  {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */
  }
}