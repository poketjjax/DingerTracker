function HandleTextMessageClick() {
    HideEmailForm();
    ShowTextMessageForm();
}

function HideEmailForm() {
    $("#emailForm").hide();
}

function ShowTextMessageForm() {
    $("#textMessageForm").show();
}

function HandleEmailClick() {
    HideTextMessageForm();
    ShowEmailForm();
}

function HideTextMessageForm() {
    $("#textMessageForm").hide();
}

function ShowEmailForm() {
    $("#emailForm").show();
}