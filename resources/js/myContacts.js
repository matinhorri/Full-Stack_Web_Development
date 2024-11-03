function sortTable(column_number) {
    var ta, rows, condition, i, first, second, change;
    condition = true;
    ta = document.getElementById("tablecontainer");
    while (condition) {
      rows = ta.rows;
      condition = false;
      for (i = 1; i < (rows.length - 1); i++) {
        change = false;
        first = rows[i].getElementsByTagName("TD")[column_number];
        second = rows[i + 1].getElementsByTagName("TD")[column_number];
        if (first.innerHTML.toLowerCase() > second.innerHTML.toLowerCase()) {
          change = true;
          break;
        }
      }
      if (change) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        condition = true;
      }
    }
  }
  function onImg()
    {
        imagetwo.setAttribute("src", "resources/images/Keller.jpg");
    }
    //some version
    function outImg()
    {
        imagetwo.setAttribute("src", "resources/images/malibu.png");
    }
    function funImg()
    {
        imagetwo.setAttribute("src", "resources/images/Shepherd.jpg");
    }