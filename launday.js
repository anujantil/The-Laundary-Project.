var x,y;
var z=[];

$(".account_creation_button").click(function()
{
    if($("#name-1").val()=="")
    {
        alert("Enter your name.");
    }
    else
    if($("#contact_number-1").val() == "")
    {
        alert("Enter Your Contact Number.");
    }
    else
    if($("#email_id-1").val() == "")
    {
        alert("Enter Your Email_id.");
    }
    else
    if($("#password-1").val() == "")
    {
        alert("Enter Your password.");
    }
    else
    if($("#contact_number-1").val().length != 10)
    {
        alert($("#contact_number-1").val().length); 
    }
    else
    {
        alert("Your Account is successfully created.");
        
        x= $("#name-1").val()+$("#contact_number-1").val();
        y=$("#password-1").val();

        alert("Your username : "+x);
        alert("Your password is : "+y);
    }


    $("#name-1").val("");
    $("#contact_number-1").val("");
    $("#email_id-1").val("");
    $("#password-1").val(""); 
});


$(".order_button").click(function()
{
    if($(".username").val()=="")
    {
        alert("Enter Username.");
    } 
    else
    if($(".mobile-phone").val()=="")
    {
        alert("Enter Contact Number.");
    }
    else
    if($(".address").val()=="")
    {
        alert("Enter Address.");
    }
    else
    if($(".postal-code").val()=="")
    {
        alert("Enter Postal Code");
    }
    else
    if($(".mobile-phone").val().length != 10)
    {
        alert("You have entered an incorrect contact number.");
    }
    else
    if($(".postal-code").val().length != 6)
    {
        alert("You have entered a wrong postal code.");
    }
    else
    if($("#category option:selected").val() == 0)
    {
        alert("kindly select any category option.");
    }
    else
    if($("#services-1:checked").val() == undefined)
    {
        alert("Select atleast one dress item.");
    }
    else
    {
        $("#services-1:checked").each(function()
        {
             var a="";

             a+= $(this).val();

             z.push(a);
        });

        alert("Your order for "+z+" is successfully placed.");
    }

    if($(".username").val() != x)
    {
        alert("This username doesn't exist. Create an account first to get the accessible Username.");
    }


    $(".username").val("");
    $(".mobile-phone").val("");
    $(".address").val("");
    $(".postal-code").val("");
    $("#category option:selected").val() = 0;

    $("#services-1 : checked").each(function()
    {
         $(this).val("");
    });
});

$(".merge-button").click(function()
{
     if($(".subscriber-1").val() == "")
     {
         alert("Enter your Email Id to Subscribe to our Newsletter.");
     }
     else
     {
         $(".subscriber-1").val("");
     }
});

$(".merge-button-1").click(function()
{
    if($(".subscriber-2").val() == "")
     {
         alert("Enter your Email Id to Subscribe to our Newsletter.");
     }
     else
     {
         $(".subscriber-2").val("");
     }
});