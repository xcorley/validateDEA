function validateForm()
{

var w=document.forms["verify-med"]["medstate"].value;
var x=document.forms["verify-med"]["medname"].value;
var y=document.forms["verify-med"]["medlic"].value;
var z=document.forms["verify-med"]["deanum"].value;

if (x==null || x=="")
	{
	alert("Name must be filled out");
	return false;
	}

if (w.length < 1) {
	alert('Please select a state');
	return false ;
	}

if ((y==null || y=="") && (z==null || z==""))
	{
	alert("DEA number or Medical license number must be filled out");
	return false;
	}
  
if ((y != null) && (y != ""))
	{
	if (y.length < 5)
		{
		alert("Invalid Medical license number");
		return false;
		}
	}

if ((z != null) && (z != ""))
	{

	if (z.length != 9)
		{
		alert("Invalid DEA Number");
		return false;
		}

	var strDEAFirstLetter = z.substr(0,1).toUpperCase();

	if ((strDEAFirstLetter != "A") && (strDEAFirstLetter != "B") && (strDEAFirstLetter != "M") && (strDEAFirstLetter != "F"))
		{
		alert("Invalid DEA Number");
		return false;
		}

	var strDEASecondLetter = z.substr(1,1).toUpperCase();

	var strValidChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var strValidNums = "0123456789";

	if ((strValidChars.indexOf(strDEASecondLetter) < 0) && (strValidNums.indexOf(strDEASecondLetter) < 0))
		{
		alert("Invalid DEA Number");
		return false;
		}


	var iThird = parseInt(z.substr(2,1));
	var iFourth = parseInt(z.substr(3,1));
	var iFifth = parseInt(z.substr(4,1));
	var iSixth = parseInt(z.substr(5,1));
	var iSeventh = parseInt(z.substr(6,1));
	var iEighth = parseInt(z.substr(7,1));
	var iNinth = parseInt(z.substr(8,1));

	var totalOdd = iThird + iFifth + iSeventh;
	var totalEven = iFourth + iSixth + iEighth;

	var finalTotal = totalOdd + (2 * totalEven);

	var ftStr = finalTotal.toString();

	var checkDigit = parseInt(ftStr.substr(1,1));

	if (iNinth != checkDigit)
		{
		alert("Invalid DEA Number");
		return false;
		}

	}

}
