
    var emptyRow = "<tr><td colspan='6' class='text-center'> No Records Available</td></tr>";
    $(document).ready(function () {
     
      loadDataFromLocal();
      $("#add_to_cart").hide();
      $('#tblData').on('click', '.btn-edit', function () {
        
        const name = $(this).parent().parent().find(".txtName").html();
        const skew = $(this).parent().parent().find(".txtSkew").html();
        const price = $(this).parent().parent().find(".txtPrice").html();
        const quantity = $(this).parent().parent().find(".txtQuantity").html();
        const id = $(this).parent().parent().find(".txtName").attr("data-id");
        $("#txtName").val(name);
        $("#txtSkew").val(skew);
        $("#txtPrice").val(price);
        $("#txtQuantity").val(quantity);
        $("#txtId").val(id);
        $("#btnSave").text("Update");
      });

      $('#tblData').on('click', '.btn-delete', function () {
        
        const id = $(this).parent().parent().find(".txtName").attr("data-id");
        deleteDataFromLocal(id);
      });

      $("#btnSave").click(function () {
       
        if ($("#txtId").val() == '') {
          addDataToLocal();
        } else {
          updateDataFromLocal();
        }
      });

      $("#btnClear").click(function () {
        
        clearForm();
      });
    });

    function clearForm() {
     
      $("#txtName").val("");
      $("#txtSkew").val("");
      $("#txtPrice").val("");
      $("#txtQuantity").val("");
      $("#btnSave").text("Add");
    }

    function addEmptyRow() {
      
      if ($("#tblData tbody").children().children().length == 0) {
        $("#tblData tbody").append(emptyRow);
      }
    }

    function loadDataFromLocal() {
      
      $("#add_to_cart").show();
      let localData = localStorage.getItem('localData');
      if (localData) {
        $("#tblData tbody").html("");
        let localArray = JSON.parse(localData);
        let index = 1;
        localArray.forEach(element => {
          let dynamicTR = "<tr>";
          dynamicTR = dynamicTR + "<td> " + index + "</td>";
          dynamicTR = dynamicTR + "<td class='txtName'  data-id=" + element.id + ">" + element.name + "</td>";
          dynamicTR = dynamicTR + "<td class='txtSkew'>" + element.skew + "</td>";
          dynamicTR = dynamicTR + "<td class='txtPrice'>" + element.price + "</td>";
          dynamicTR = dynamicTR + "<td class='txtQuantity'>" + element.quantity + "</td>";
          dynamicTR = dynamicTR + "    <td class='tdAction text-center'>";
          dynamicTR = dynamicTR + "        <button class='btn btn-sm btn-success btnminus'>-</button>";
          dynamicTR = dynamicTR + "        <label class='incrementText'> 0 </label>";
          dynamicTR = dynamicTR + "        <button class='btn btn-sm btn-success btnplus'>+</button>";
          dynamicTR = dynamicTR + "        <button class='btn btn-sm btn-success btn-edit'> Edit</button>";
          dynamicTR = dynamicTR + "        <button class='btn btn-sm btn-danger btn-delete'> Delete</button>";
          dynamicTR = dynamicTR + "        <button class='btn btn-sm btn-success btn-addtocart'>Add To Cart</button>";
          dynamicTR = dynamicTR + "    </td>";
          dynamicTR = dynamicTR + " </tr>";
          $("#tblData tbody").append(dynamicTR);
          index++;
        });
      }
      addEmptyRow();

  $(".btnplus").click(function(){
    var num  = parseInt($(this).closest("tr").find(".incrementText").html());
    if (num == 50){
      $(this).closest("tr").find(".incrementText").html(num);
    }
    else{
    $(this).closest("tr").find(".incrementText").html(num + 1);
    }
  });
  $(".btnminus").click(function(){
    var num  = parseInt($(this).closest("tr").find(".incrementText").html());
    if (num == 0){
      $(this).closest("tr").find(".incrementText").html(num);
    }
    else{
      $(this).closest("tr").find(".incrementText").html(num - 1);
    }
  });
  
    }

    function addDataToLocal() {
      
      let localData = localStorage.getItem('localData');
      if (localData) {
        let localArray = JSON.parse(localData);
        const obj = {
          id: localArray.length + 1,
          name: $("#txtName").val(),
          skew: $("#txtSkew").val(),
          price: $("#txtPrice").val(),
          quantity: $("#txtQuantity").val()
          
        };
        localArray.push(obj);
        localStorage.setItem('localData', JSON.stringify(localArray));
        loadDataFromLocal();
      } else {
        const arryObj = [];
        const obj = {
          id: 1,
          name: $("#txtName").val(),
          skew: $("#txtSkew").val(),
          price: $("#txtPrice").val(),
          quantity: $("#txtQuantity").val(),
        };
        arryObj.push(obj);
        localStorage.setItem('localData', JSON.stringify(arryObj));
        loadDataFromLocal();
      }
      clearForm();
    }

    function updateDataFromLocal() {
      
      let localData = localStorage.getItem('localData');
      let localArray = JSON.parse(localData);
      const oldRecord = localArray.find(m => m.id == $("#txtId").val());
      oldRecord.name = $("#txtName").val();
      oldRecord.skew = $("#txtSkew").val();
      oldRecord.price = $("#txtPrice").val();
      oldRecord.quantity = $("#txtQuantity").val();
      localStorage.setItem('localData', JSON.stringify(localArray));
      loadDataFromLocal();
      clearForm();
    }

    function deleteDataFromLocal(id) {
     
      let localData = localStorage.getItem('localData');
      let localArray = JSON.parse(localData);
      let i = 0;
      while (i < localArray.length) {
        if (localArray[i].id === Number(id)) {
          localArray.splice(i, 1);
        } else {
          ++i;
        }
      }
      localStorage.setItem('localData', JSON.stringify(localArray));
      loadDataFromLocal();
    }

    $('#tblData').on('click', '.btn-addtocart', function () {
        
        $("#add_to_cart").show();
        let dynamicTR1 = "<tr>";
          dynamicTR1 = dynamicTR1 + "<td class='txtName'>" + $(this).closest("tr").find(".txtName").text(); + "</td>";
          dynamicTR1 = dynamicTR1 + "<td class='txtSkew'>" + $(this).closest("tr").find(".txtSkew").text();   + "</td>";
          dynamicTR1 = dynamicTR1 + "<td class='txtPrice'>" + $(this).closest("tr").find(".txtPrice").text();   + "</td>";
          dynamicTR1 = dynamicTR1 + "<td class='txtQuantity'>" + $(this).closest("tr").find(".txtQuantity").text();   + "</td>";
          dynamicTR1 = dynamicTR1 + "<td class='incrementText'>" + $(this).closest("tr").find(".incrementText").text();   + "</td>";
          dynamicTR1 = dynamicTR1 + "</tr>";
        $("#tblData1 tbody").append(dynamicTR1);
  

  });
  