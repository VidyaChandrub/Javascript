let employees=[{"id":1,"name":"Antonin","email":"adoorly0@who.int"},
{"id":2,"name":"Lora","email":"lturfs1@ucoz.ru"},
{"id":3,"name":"Rozele","email":"rrivalland2@spotify.com"},
{"id":4,"name":"Rayshell","email":"rgiven3@163.com"},
{"id":5,"name":"Cindra","email":"cpremble4@utexas.edu"},
{"id":6,"name":"Jared","email":"jocriane5@google.pl"},
{"id":7,"name":"Gabie","email":"gbrocklehurst6@bloglovin.com"},
{"id":8,"name":"Ephrem","email":"ebusse7@oakley.com"},
{"id":9,"name":"Shoshanna","email":"shennemann8@boston.com"},
{"id":10,"name":"Alfi","email":"abailles9@paypal.com"},
{"id":10,"name":"Alfi","email":"abailles9@paypal.com"}]
function display_data(){
    let rows='';
    for (emp of employees){
        rows=rows+ `<tr>
                        <td>${emp.id}</td>
                        <td>${emp.name}</td>
                        <td>${emp.email}</td>
                        <td>${emp.email.slice(emp.email.indexOf("@")+1,emp.email.indexOf("."))}</td>
                    </tr>`
    }
 document.getElementById('tdata').innerHTML=rows;

} 