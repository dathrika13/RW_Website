function privacyAlert5953302000000435327() {
  var privacyTool = document.getElementById("privacyTool5953302000000435327");

  var privacyErr = document.getElementById("privacyErr5953302000000435327");

  if (privacyTool != undefined && !privacyTool.checked) {
    privacyErr.style.visibility = "visible";

    privacyTool.focus();

    return false;
  }
  return true;
}

function disableErr5953302000000435327() {
  var privacyTool = document.getElementById("privacyTool5953302000000435327");

  var privacyErr = document.getElementById("privacyErr5953302000000435327");

  if (
    privacyTool != undefined &&
    privacyTool.checked &&
    privacyErr != undefined
  ) {
    privacyErr.style.visibility = "hidden";
  }
}

function validateEmail5953302000000435327() {
  var form = document.forms["WebToLeads5953302000000435327"];

  var emailFld = form.querySelectorAll("[ftype=email]");

  var i;

  for (i = 0; i < emailFld.length; i++) {
    var emailVal = emailFld[i].value;

    if (emailVal.replace(/^\s+|\s+$/g, "").length != 0) {
      var atpos = emailVal.indexOf("@");

      var dotpos = emailVal.lastIndexOf(".");

      if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
        alert("Please enter a valid email address. ");

        emailFld[i].focus();

        return false;
      }
    }
  }

  if (emailVal.includes("gmail.com")) {
    alert("Please use company email instead");
    return false;
  }

  return true;
}

function checkMandatory5953302000000435327(noDownload=true) {
  var mndFileds = new Array("Company", "Last Name", "Email", "title");

  var fldLangVal = new Array(
    "Company\x20Name",
    "Last\x20Name",
    "Email",
    "title"
  );

  for (i = 0; i < mndFileds.length; i++) {
    var fieldObj =
      document.forms["WebToLeads5953302000000435327"][mndFileds[i]];

    if (fieldObj) {
      if (fieldObj.value.replace(/^\s+|\s+$/g, "").length == 0) {
        if (fieldObj.type == "file") {
          alert("Please select a file to upload.");

          fieldObj.focus();

          return false;
        }

        alert(fldLangVal[i] + " cannot be empty.");

        fieldObj.focus();

        return false;
      } else if (fieldObj.nodeName == "SELECT") {
        if (fieldObj.options[fieldObj.selectedIndex].value == "-None-") {
          alert(fldLangVal[i] + " cannot be none.");

          fieldObj.focus();

          return false;
        }
      } else if (fieldObj.type == "checkbox") {
        if (fieldObj.checked == false) {
          alert("Please accept  " + fldLangVal[i]);

          fieldObj.focus();

          return false;
        }
      }

      try {
        if (fieldObj.name == "Last Name") {
          name = fieldObj.value;
        }
      } catch (e) {}
    }
  }

  if (!validateEmail5953302000000435327()) {
    return false;
  }

  if (!privacyAlert5953302000000435327()) {
    return false;
  }

  if (noDownload) {
    return;
  }
  const downloadChild = document.createElement("a");
  downloadChild.href = "/assets/images/WHITEPAPER.pdf";

  downloadChild.download = "whitepaper";

  downloadChild.style = "display:none";

  document.body.appendChild(downloadChild);
  // downloadChild.click();

  document.body.removeChild(downloadChild);

  // document
  //   .querySelector(".crmWebToEntityForm .formsubmit")
  //   .setAttribute("disabled", true);
}


function tooltipShow5953302000000435327(el) {
  var tooltip = el.nextElementSibling;

  var tooltipDisplay = tooltip.style.display;

  if (tooltipDisplay == "none") {
    var allTooltip = document.getElementsByClassName("zcwf_tooltip_over");

    for (i = 0; i < allTooltip.length; i++) {
      allTooltip[i].style.display = "none";
    }

    tooltip.style.display = "block";
  } else {
    tooltip.style.display = "none";
  }
}
//Partner Portal

	function validateEmail5953302000005272023()
	{
		var form = document.forms['WebToLeads5953302000005272023'];
		var emailFld = form.querySelectorAll('[ftype=email]');
		var i;
		for (i = 0; i < emailFld.length; i++)
		{
			var emailVal = emailFld[i].value;
			if((emailVal.replace(/^\s+|\s+$/g, '')).length!=0 )
			{
				var atpos=emailVal.indexOf('@');
				var dotpos=emailVal.lastIndexOf('.');
				if (atpos<1 || dotpos<atpos+2 || dotpos+2>=emailVal.length)
				{
					alert('Please enter a valid email address. ');
					emailFld[i].focus();
					return false;
				}
			}
		}
		return true;
	}

	function checkMandatory5953302000005272023() {
		var mndFileds = new Array('Company','First Name','Last Name','Designation','Email','Website','Description','LEADCF8');
		var fldLangVal = new Array('Company\x20Name','Lead\x20First\x20Name','Last\x20Name','Job\x20Title','Email','Website','Message\x20for\x20Redwoods','Lead\x20Submitted\x20By');
		for(i=0;i<mndFileds.length;i++) {
		  var fieldObj=document.forms['WebToLeads5953302000005272023'][mndFileds[i]];
		  if(fieldObj) {
			if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length==0) {
			 if(fieldObj.type =='file')
				{ 
				 alert('Please select a file to upload.'); 
				 fieldObj.focus(); 
				 return false;
				} 
			alert(fldLangVal[i] +' cannot be empty.'); 
   	   	  	  fieldObj.focus();
   	   	  	  return false;
			}  else if(fieldObj.nodeName=='SELECT') {
  	   	   	 if(fieldObj.options[fieldObj.selectedIndex].value=='-None-') {
				alert(fldLangVal[i] +' cannot be none.'); 
				fieldObj.focus();
				return false;
			   }
			} else if(fieldObj.type =='checkbox'){
 	 	 	 if(fieldObj.checked == false){
				alert('Please accept  '+fldLangVal[i]);
				fieldObj.focus();
				return false;
			   } 
			 } 
			 try {
			     if(fieldObj.name == 'Last Name') {
				name = fieldObj.value;
 	 	 	    }
			} catch (e) {}
		    }
		}
		if(!validateEmail5953302000005272023()){return false;}
		
	var urlparams = new URLSearchParams( window.location.search);
	if(urlparams.has('service') && (urlparams.get('service')==='smarturl')){
		var webform = document.getElementById('webform5953302000005272023');
		 var service =  urlparams.get('service'); 
		var smarturlfield = document.createElement('input');
		smarturlfield.setAttribute('type','hidden');
		smarturlfield.setAttribute('value',service);
		smarturlfield.setAttribute('name','service');
		webform.appendChild(smarturlfield); 
	}

		// document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true);
	}

function tooltipShow5953302000005272023(el){
	var tooltip = el.nextElementSibling;
	var tooltipDisplay = tooltip.style.display;
	if(tooltipDisplay == 'none'){
		var allTooltip = document.getElementsByClassName('zcwf_tooltip_over');
		for(i=0; i<allTooltip.length; i++){
			allTooltip[i].style.display='none';
		}
		tooltip.style.display = 'block';
	}else{
		tooltip.style.display='none';
	}
}
