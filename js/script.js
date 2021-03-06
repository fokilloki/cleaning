let isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
	},
	any: function () {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};
let body = document.querySelector('body');

// if (isMobile.any()) {
body.classList.add('touch');
let arrow = document.querySelectorAll('.arrow-menu-nav')
for (i = 0; i < arrow.length; i++) {
	let thisLink = arrow[i].previousElementSibling;
	let subMenu = arrow[i].nextElementSibling;
	let thisArrow = arrow[i];
	thisLink.classList.add('parent');

	arrow[i].addEventListener('click', function () {
		subMenu.classList.toggle('open');
		thisArrow.classList.toggle('active');
	})
	thisLink.addEventListener('click', function (e) {
		e.preventDefault();
		subMenu.classList.toggle('open');
		thisArrow.classList.toggle('active');
	})
}
// } else {
// 	body.classList.add('mouse');
// }





$(".link").click(function () {
	var data = $(this).data("href");
	$('.link.active').removeClass('active');
	$(this).addClass('active');
	$("#image").fadeOut(700, function () {
		$("#image").attr("src", data);
	}).fadeIn(700);
	return false;
});

$("#dop_menu_services").click(function () {
	$(this).addClass('active');
	$('header .dop_menu > ul').css("display", "block");
	return false;
});
$("#sub-sub_dop_menu_services").click(function () {
	$(this).addClass('active');
	$('header .sub-sub_dop_menu').css("visibility", "visible");
	return false;
});
/*

$("#dop_menu_services").mouseover(function() {
	 $(this).addClass('active');
	 $('header .dop_menu ul').css("display", "block");
	 return false;
});
*/

$("#dop_menu_services_footer").click(function () {
	$(this).addClass('active');
	$('footer .dop_menu ul').css("display", "block");
	return false;
});
/*
$("#dop_menu_services_footer").mouseover(function() {
	 $(this).addClass('active');
	 $('footer .dop_menu ul').css("display", "block");
	 return false;
});

$(".dop_menu").mouseout(function() {
	 $('.dop_menu ul').css("display", "none");
	 return false;
});*/

$('#ex1').on($.modal.BEFORE_OPEN, function (event, modal) {
	$('.messages').html("");
	$('#form_phone').val("");
});
$('#ex2').on($.modal.BEFORE_OPEN, function (event, modal) {
	$('.messages').html("");
	$('#form_area').val("")
	$('#form_phone_full').val("");
	$('#form_name_main').val("");
	$('#form_comm').val("");
});

$('#ex3').on($.modal.BEFORE_OPEN, function (event, modal) {
	$('.messages').html("");
	$('#form_area1').val("");
	$('#form_phone_full1').val("");
	$('#form_name_main1').val("");
	$('#form_comm1').val("");
});

$("#ex3_href").click(function () {
	if ("ga" in window) {
		tracker = ga.getAll()[0];
		if (tracker)
			tracker.send("event", "???????????????????? ?????????????????? (????????)", "click");
	}
	$('#ex3').modal();
});

$("#submitPhone").click(function () {
	if ($(this).parents('.form_control').children('.skritoe').val()) { return false; }
	// if ($(this).parents('form_control') { grecaptcha.execute();}
	if ("ga" in window) {
		tracker = ga.getAll()[0];
		if (tracker)
			tracker.send("event", "???????????????? ????????????", "click");
	}
	var form_phone = $('#form_phone').val();
	var form_cap = $('#g-recaptcha-response').val();
	$.ajax({
		url: "action_recap.php?v=2",
		type: "post",
		dataType: "json",
		data: {
			"form_phone": form_phone,
			"type": "phone",
			"g-recaptcha-response": form_cap
		},
		success: function (data) {
			$('.messages').html(data.result);
			$('#form_phone').val("");
		}
	});
	return false;
});

$("#submitForm").click(function () {
	if ($(this).parents('.form_control').children('.skritoe').val()) { return false; }
	if ("ga" in window) {
		tracker = ga.getAll()[0];
		if (tracker)
			tracker.send("event", "???????????????? ????????????", "click");
	}
	var form_area = $('#form_area').val();
	var form_type = $('#form_type').val();
	var form_phone_full = $('#form_phone_full').val();
	var form_name_main = $('#form_name_main').val();
	var form_comm = $('#form_comm').val();
	$.ajax({
		url: "action.php?ver=2",
		type: "post",
		dataType: "json",
		data: {
			"form_area": form_area,
			"form_type": form_type,
			"form_phone_full": form_phone_full,
			"form_name": form_name_main,
			"form_comm": form_comm,
			"type": "form_full"
		},
		success: function (data) {
			$('.messages').html(data.result);
			$('#form_area').val("");
			$('#form_phone_full').val("");
			$('#form_name_main').val("");
			$('#form_comm').val("");
		}
	});
	return false;
});
$("#submitForm1").click(function () {
	if ($(this).parents('.form_control').children('.skritoe').val()) { return false; }
	var form_area = $('#form_area1').val();
	var form_type = $('#form_type1').val();
	var form_phone_full = $('#form_phone_full1').val();
	var form_name_main = $('#form_name_main1').val();
	var form_comm = $('#form_comm1').val();
	$.ajax({
		url: "action.php?ver=2",
		type: "post",
		dataType: "json",
		data: {
			"form_area": form_area,
			"form_type": form_type,
			"form_name": form_name_main,
			"form_phone_full": form_phone_full,
			"form_comm": form_comm,
			"type": "form_full"
		},
		success: function (data) {
			$('.messages').html(data.result);
			$('#form_area1').val("");
			$('#form_name_main1').val("");
			$('#form_phone_full1').val("");
			$('#form_comm1').val("");
		}
	});
	return false;
});

$("#submitForm2").click(function () {
	if ($(this).parents('.form_control').children('.skritoe').val()) { return false; }
	var form_area = $('#form_area2').val();
	var form_type = $('#form_type2').val();
	var form_phone_full = $('#form_phone_full2').val();
	var form_name_main = $('#form_name_main2').val();
	var form_comm = $('#form_comm2').val();
	$.ajax({
		url: "action.php?ver=2",
		type: "post",
		dataType: "json",
		data: {
			"form_area": form_area,
			"form_type": form_type,
			"form_name": form_name_main,
			"form_phone_full": form_phone_full,
			"form_comm": form_comm,
			"type": "form_full"
		},
		success: function (data) {
			$('.messages').html(data.result);
			$('#form_area2').val("");
			$('#form_name_main2').val("");
			$('#form_phone_full2').val("");
			$('#form_comm2').val("");
		}
	});
	return false;
});

$(".submitFormIndex_1").click(function () {
	if ($(this).parents('.form_control').children('.skritoe').val()) { return false; }
	if ("ga" in window) {
		tracker = ga.getAll()[0];
		if (tracker)
			tracker.send("event", "???????????? ?????????????????? ???????????? (?????????????? 1)", "click");
	}
	var form_area = $('#form_11').val();
	var form_type = $('#form_12').val();
	var form_name = $('#form_13').val();
	var form_phone_full = $('#form_14').val();
	var form_comm = $('#form_15').val();
	$.ajax({
		url: "action.php?ver=2",
		type: "post",
		dataType: "json",
		data: {
			"form_area": form_area,
			"form_type": form_type,
			"form_name": form_name,
			"form_phone_full": form_phone_full,
			"form_comm": form_comm,
			"type": "form_full"
		},
		success: function (data) {
			$('.messages').html(data.result);
			$('#form_11').val("");
			$('#form_13').val("");
			$('#form_14').val("");
			$('#form_15').val("");
			$('#form-message').modal();
		}
	});
	return false;
});

$(".submitFormIndex_2").click(function () {
	if ($(this).parents('.form_control').children('.skritoe').val()) { return false; }
	var str = "???????????? ?????????????????? ???????????? (?????????????? 2)";
	if ($(this).data("type") == "cont") {
		str = "???????????? ?????????????????? ???????????? (????????????????)";
	}
	else if ($(this).data("type") == "ind") {
		str = "???????????? ?????????????????? ???????????? (?????????????? 2)";
	}
	if ("ga" in window) {
		tracker = ga.getAll()[0];
		if (tracker)
			tracker.send("event", str, "click");
	}
	var form_area = $('#form_21').val();
	var form_type = $('#form_22').val();
	var form_name = $('#form_23').val();
	var form_phone_full = $('#form_24').val();
	var form_comm = $('#form_25').val();
	$.ajax({
		url: "action.php?ver=2",
		type: "post",
		dataType: "json",
		data: {
			"form_area": form_area,
			"form_type": form_type,
			"form_name": form_name,
			"form_phone_full": form_phone_full,
			"form_comm": form_comm,
			"type": "form_full"
		},
		success: function (data) {
			$('.messages').html(data.result);
			$('#form_21').val("");
			$('#form_23').val("");
			$('#form_24').val("");
			$('#form_25').val("");
			$('#form-message').modal();
		}
	});
	return false;
});

$(".submitFormIndex_3").click(function () {
	if ($(this).parents('.form_control').children('.skritoe').val()) { return false; }
	var str = "???????????? ?????????????????? ???????????? (?????????????? 3)";
	if ($(this).data("type") == "office") {
		str = "???????????? ?????????????????? ???????????? (???? ????????)";
	}
	else if ($(this).data("type") == "ind") {
		str = "???????????? ?????????????????? ???????????? (?????????????? 3)";
	}
	else {
		str = "???????????? ?????????????????? ???????????? (?????? ????????)";
	}
	if ("ga" in window) {
		tracker = ga.getAll()[0];
		if (tracker)
			tracker.send("event", str, "click");
	}

	var form_area = $('#form_31').val();
	var form_type = $('#form_32').val();
	var form_name = $('#form_33').val();
	var form_phone_full = $('#form_34').val();
	var form_comm = $('#form_35').val();
	$.ajax({
		url: "action.php?ver=2",
		type: "post",
		dataType: "json",
		data: {
			"form_area": form_area,
			"form_type": form_type,
			"form_name": form_name,
			"form_phone_full": form_phone_full,
			"form_comm": form_comm,
			"type": "form_full"
		},
		success: function (data) {
			$('.messages').html(data.result);
			$('#form_31').val("");
			$('#form_33').val("");
			$('#form_34').val("");
			$('#form_35').val("");
			$('#form-message').modal();
		}
	});
	return false;
});

$(".submitFormIndex_4").click(function () {
	if ($(this).parents('.form_control').children('.skritoe').val()) { return false; }
	var str = "???????????? ?????????????????? ???????????? (??????????????????)";
	if ($(this).data("type") == "office") {
		str = "???????????? ?????????????????? ???????????? (???? ????????)";
	}
	else if ($(this).data("type") == "ind") {
		str = "???????????? ?????????????????? ???????????? (??????????????????)";
	}
	else {
		str = "???????????? ?????????????????? ???????????? (?????? ????????)";
	}
	if ("ga" in window) {
		tracker = ga.getAll()[0];
		if (tracker)
			tracker.send("event", str, "click");
	}

	var form_name = $('#form_81').val();
	var form_phone_full = $('#form_82').val();
	var form_comm = $('#form_83').val();
	$.ajax({
		url: "action.php?ver=2",
		type: "post",
		dataType: "json",
		data: {
			"form_name": form_name,
			"form_phone_full": form_phone_full,
			"form_comm": form_comm,
			"type": "form_full"
		},
		success: function (data) {
			$('.messages').html(data.result);
			$('#form_81').val("");
			$('#form_82').val("");
			$('#form_83').val("");
			$('#form-message').modal();
		}
	});
	return false;
});

$(".submitFormIndex_5").click(function () {
	if ($(this).parents('.form_control').children('.skritoe').val()) { return false; }
	var str = "???????????? ?????????????????? ???????????? (??????????????????)";
	if ($(this).data("type") == "office") {
		str = "???????????? ?????????????????? ???????????? (???? ????????)";
	}
	else if ($(this).data("type") == "ind") {
		str = "???????????? ?????????????????? ???????????? (??????????????????)";
	}
	else {
		str = "???????????? ?????????????????? ???????????? (?????? ????????)";
	}
	if ("ga" in window) {
		tracker = ga.getAll()[0];
		if (tracker)
			tracker.send("event", str, "click");
	}

	var form_name = $('#form_51').val();
	var form_phone_full = $('#form_52').val();
	var form_comm = $('#form_53').val();
	$.ajax({
		url: "action.php?ver=2",
		type: "post",
		dataType: "json",
		data: {
			"form_name": form_name,
			"form_phone_full": form_phone_full,
			"form_comm": form_comm,
			"type": "form_full"
		},
		success: function (data) {
			$('.messages').html(data.result);
			$('#form_51').val("");
			$('#form_52').val("");
			$('#form_53').val("");
			$('#form-message').modal();
		}
	});
	return false;
});

$("html, body").click(function (e) {
	if ($(e.target).hasClass('services_href')) {
		return true;
	}
	$('.dop_menu ul').css("display", "none");
});

$("#function_href").click(function () {
	if ("ga" in window) {
		tracker = ga.getAll()[0];
		if (tracker)
			tracker.send("event", "???????????? ???? ?????????? ?????? 3 ???????????? ?????????? ???? ????????????", "click");
	}
	$('html, body').animate({
		scrollTop: $("#functions").offset().top
	}, 1000);
	return false;
});

$(".btn_home").click(function () {
	$('#ex4').modal();
	document.getElementById("form_type2").selectedIndex = $(this).data("type");
	if ($(this).data("serv") == "office") {
		if ($(this).data("type") == 0) {
			if ("ga" in window) {
				tracker = ga.getAll()[0];
				if (tracker)
					tracker.send("event", "???????????????? (???? ???????? ?????????????? ??????????????)", "click");
			}
		}
		else if ($(this).data("type") == 1) {
			if ("ga" in window) {
				tracker = ga.getAll()[0];
				if (tracker)
					tracker.send("event", "???????????????? (???? ???????? ?????????????? 3 ????????????)", "click");
			}
		}
		else {
			if ("ga" in window) {
				tracker = ga.getAll()[0];
				if (tracker)
					tracker.send("event", "???????????????? (???? ???????? ?????????????? 1 ??????)", "click");
			}
		}
	}
	else {
		if ($(this).data("type") == 0) {
			if ("ga" in window) {
				tracker = ga.getAll()[0];
				if (tracker)
					tracker.send("event", "???????????????? (?????? ???????? ?????????????????????? ????????????)", "click");
			}
		}
		else if ($(this).data("type") == 1) {
			if ("ga" in window) {
				tracker = ga.getAll()[0];
				if (tracker)
					tracker.send("event", "???????????????? (?????? ???????? ???????????????????????????? ????????????)", "click");
			}
		}
		else {
			if ("ga" in window) {
				tracker = ga.getAll()[0];
				if (tracker)
					tracker.send("event", "???????????????? (?????? ???????? ???????????? ?????????? ??????????????)", "click");
			}
		}
	}

	return false;
});



if ($('body').hasClass('map_home') || $('body').hasClass('page-dry')) {
	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 15,
		nav: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1331: {
				items: 3
			}
		}
	})
}