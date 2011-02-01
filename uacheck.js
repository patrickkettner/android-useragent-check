function uaCheck(){
        var uA=navigator.userAgent;
	var C=confirm;
	var w=window;
	var X=document;
	var d="F=0;expires=";
	var D="F=1;expires=";
	//set a cookie that expires in 24 hours so they don't get pestered right away
	var t=new Date(new Date().getTime()+86400000).toGMTString();
	//set a cookie that expires in a month so they don't get annoyed for a looong time
	var T=new Date(new Date().getTime()+2628000000).toGMTString();
	var m="Hey, you're using the ";
	var m2=", right? If you want to skip straight to your phones page, hitup ok. otherwise, just tap cancel, and sorry for bothering you.";
	var b="http://where_we_want_to_forward.com";
	var M="motorola";
	var B=" Build";
	var S="samsung";
       
	if (document.cookie.indexOf("F") === -1){
	        if (uA.indexOf('Droid'+B)!==-1){var a=C(m+"droid"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('G1'+B)!==-1){var a=C(m+"g1"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('ADR6200'+B)!==-1){var a=C(m+"droid eris"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('MB200'+B)!==-1){var a=C(m+M+" cliq"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('I897UCJF6'+B)!==-1){var a=C(m+S+" captivate"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('A6366')!==-1){var a=C(m+"htc aria"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('SonyEricssonX10a'+B)!==-1){var a=C(m+"xperia x10"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('MB300'+B)!==-1){var a=C(m+M+" backflip"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('DROID2'+B)!==-1){var a=C(m+"droid 2"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('DROID2 GLOBAL'+B)!==-1){var a=C(m+"droid 2 global"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('Ally'+B)!==-1){var a=C(m+"lg ally"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('SCH-I500'+B)!==-1){var a=C(m+S+" fascinate"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('DROIDX'+B)!==-1){var a=C(m+"droid x"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('ADR6300'+B)!==-1){var a=C(m+"droid incredible"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('calgary'+B)!==-1){var a=C(m+M+" devour"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('Dell Streak'+B)!==-1){var a=C(m+"dell streak"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('MB520'+B)!==-1){var a=C(m+M+" bravo"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('MB511'+B)!==-1){var a=C(m+M+" flipout"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
		if (uA.indexOf('MB508'+B)!==-1){var a=C(m+M+" flipside"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('APA9292KT'+B)!==-1){var a=C(m+"evo 4g"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('APA7373KT'+B)!==-1){var a=C(m+"evo shift 4g"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('Nexus One'+B)!==-1){var a=C(m+"nexus one"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('SPH-M920'+B)!==-1){var a=C(m+S+" transform"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('Zio'+B)!==-1){var a=C(m+"sanyo zio"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('A6277'+B)!==-1){var a=C(m+"hero"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('Opus One'+B)!==-1){var a=C(m+M+" i1"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('SPH-D700'+B)!==-1){var a=C(m+S+" epic"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('SPH-M910'+B)!==-1){var a=C(m+S+" intercept"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('SPH-M900'+B)!==-1){var a=C(m+S+" moment"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('Garminfone'+B)!==-1){var a=C(m+"garminfone"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('LG-P509'+B)!==-1){var a=C(m+"lg optimus"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('Comet'+B)!==-1){var a=C(m+M+" comet"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('MB525'+B)!==-1){var a=C(m+M+" defy"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('MB502'+B)!==-1){var a=C(m+M+" charm"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('myTouch4G'+B)!==-1){var a=C(m+"mytouch 4g"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('MB501'+B)!==-1){var a=C(m+M+" cliq xt"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('T-Mobile myTouch 3G'+B)!==-1){var a=C(m+"mytouch 3g"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('T-Mobile_Espresso'+B)!==-1){var a=C(m+"mytouch 3g slide"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('SGH-T959'+B)!==-1){var a=C(m+S+" vibrant"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('T-Mobile G2'+B)!==-1){var a=C(m+"g2"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('Nexus S'+B)!==-1){var a=C(m+"nexus s"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('DROID PRO'+B)!==-1){var a=C(m+"droid pro"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('SCH-I400'+B)!==-1){var a=C(m+"Continumm"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('WX445'+B)!==-1){var a=C(m+M+" citrus"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('SGH-T849'+B)!==-1){var a=C(m+"galaxy tab"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('SCH-I800'+B)!==-1){var a=C(m+"galaxy tab"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('Ideos S7'+B)!==-1){var a=C(m+"ideos s7"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
	        if (uA.indexOf('LogicPD Zoom2'+B)!==-1){var a=C(m+"nook color"+m2);if (a){w.location=b;X.cookie=d+t;}else{X.cookie=D+T;}}
        }
}
