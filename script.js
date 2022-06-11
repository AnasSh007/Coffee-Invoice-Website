    var price;
    var counter = 1;
    var quan;
    var total;
    var total_bill = 0;
    var discount = 0;
    var tax = 0;
    var add_funtion_counter = 1;
    var coffee_name;

//======================================

    function place_price() {
        price = document.getElementById("menu").value;
        document.getElementById("price").value = price;
    }

//======================================

    function null_bill() {
        document.getElementById("coffee_bill").value = "";
        document.getElementById("quantity").value = "";
    }

//======================================

    function calculate() {
        quan = document.getElementById("quantity").value;
        total = quan * price;
        document.getElementById("coffee_bill").value = total;
    }

//======================================

    function add() {

            if(quan<1)
            null_value();

            var my_tbody = document.getElementById('items');

            var select_id = document.getElementById("menu");

            coffee_name = select_id.options[select_id.selectedIndex].innerHTML;

            var my_row = "<tr><td id='counter_row'><button id='delete_btn' onclick='delete_row(this)'>x</button>"+counter+"</td><td>"+quan+"</td><td>"
                            +coffee_name+"</td><td>"+(price*quan)+"</td></tr>";


            my_tbody.innerHTML += my_row; // concatenation of innerHTML == append

            counter++;
            total_bill += total;

    }

//======================================

    function total_bill_calculate() {

        counter = 1;
        add_funtion_counter = 1;
        document.getElementById("subtotal").innerHTML = total_bill;

        if (total_bill > 500) 
        {
            discount =  parseInt((total_bill * 15) / 100);
            document.getElementById("discount").innerHTML = discount;
        } 
        
        else if (total_bill < 500) 
        {
            discount =  parseInt((total_bill * 10) / 100);
            document.getElementById("discount").innerHTML = discount;
        }

        total_bill = total_bill - discount;
        tax = parseInt((total_bill * 17) / 100);
        document.getElementById("tax").innerHTML = tax;
        total_bill = parseInt(total_bill + tax);
        document.getElementById("due").innerHTML = total_bill;
    }
    
//======================================

    function null_value(){
        document.getElementById('menu').value = " ";
        document.getElementById('price').value = " ";
        document.getElementById('quantity').value = null;
        document.getElementById('coffee_bill').value = " ";
    }

    function reset()
    {
        null_value();
        total_bill = 0;
        counter = 1;
        add_funtion_counter = 1;
        document.getElementById("items").innerHTML = "";
        document.getElementById("discount").innerHTML = "";
        document.getElementById("tax").innerHTML = "";
        document.getElementById("due").innerHTML = "";
        document.getElementById("subtotal").innerHTML = "";
        
    }

    function print_bill()
    {
        var original_invoice = document.body.innerHTML;

        // document.body.innerHTML = document.getElementById("items").innerHTML +
        //                           document.getElementById("billing").innerHTML
        document.body.innerHTML = document.getElementById("billing").innerHTML;
        window.print();
        document.body.innerHTML = original_invoice;       
    }

    function delete_row(a)
    {
        var index = a.parentNode.parentNode.rowIndex;
        document.getElementById("items_box").deleteRow(index);

        var row_id = document.getElementById('counter_row');
        // var i = 1;
        // while (i<6) 
        // {
        //     row_id.innerHTML = "<button id='delete_btn' onclick='delete_row(this)'>x</button>"+i;
        //     row_id++;
        //     i++;
        // }
    }