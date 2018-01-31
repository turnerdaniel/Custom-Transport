// JavaScript Document

		var data = {"total":0,"rows":[]};
		var totalCost = 0;
		
		$(function(){
			
			//grid
			$('#cartcontent').datagrid({
				singleSelect:true
			});
			
			//check to see if local storage is available
			if(localStorage && localStorage.getItem('cart')){
				console.log(localStorage.getItem('cart')); 
				
				//parse json from string into an array object
				data = JSON.parse(localStorage.getItem('cart'));
				
				//parse text to float so that it can be used as price
				totalCost = parseFloat(localStorage.getItem('total'));
			
  			
			console.log(data);
			$('#cartcontent').datagrid('loadData', data);
			$('aside.cart .total').html('Total: £'+totalCost);
			}
			
			// draggable items
			$('.item').draggable({
				revert:true,
				proxy:'clone',
				onStartDrag:function(){
					$(this).draggable('proxy').css('z-index', 999);
				}
				
			});
			
			//droppable items
			$('.cart').droppable({
				onDrop:function(e,source){
					var name = $(source).find('p.title').text();
					var price = $(source).find('p.title').attr("data");
					addProduct(name, parseFloat(price));
				}
			});
		});
		//add product info to grid
		function addProduct(name,price){
			function add(){
				for(var i=0; i<data.total; i++){
					var row = data.rows[i];
					if (row.name == name){
						row.quantity += 1;
						return;
					}
				}
				data.total += 1;
				data.rows.push({
					name:name,
					quantity:1,
					price:price
				});
			}
			add();
			//add price of item to total cost
			totalCost += price;
			$('#cartcontent').datagrid('loadData', data);
			$('aside.cart .total').html('Total: £'+totalCost);
			
			//check to see if local stroage is available & add to local storage & change JS array to string 
			if(localStorage){
			localStorage.setItem('cart', JSON.stringify(data));
			localStorage.setItem('total', totalCost);
			}
			
			console.log(JSON.stringify(data));
			console.log(totalCost);
		
		}