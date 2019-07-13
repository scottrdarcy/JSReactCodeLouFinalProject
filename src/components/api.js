import React, { Component } from "react";
import { Container, Dropdown, Form, Jumbotron } from "react-bootstrap";
import Button from "react-bootstrap/Button";

document.addEventListener("DOMContentLoaded", () => {
  // https://financialmodelingprep.com/developer/docs
  getRequest(
    "https://financialmodelingprep.com/api/is-the-market-open?datatype=json",
    drawOutput
  );

  function drawOutput(responseText) {
    let resp = JSON.parse(responseText);

    console.log(resp);

    var elements = document.querySelectorAll(".stock-name")[0];

    var isOpen = "no";

    if (resp.isthemarketopen) isOpen = "yes";

    elements.innerHTML += "Is the market open today: " + isOpen;

    var time = document.querySelectorAll(".time")[0];
  }

  function getRequest(url, success) {
    var req = false;
    try {
      req = new XMLHttpRequest();
    } catch (e) {
      try {
        req = new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {
        try {
          req = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {
          return false;
        }
      }
    }
    if (!req) return false;
    if (typeof success != "function") success = function() {};
    req.onreadystatechange = function() {
      if (req.readyState == 4) {
        if (req.status === 200) {
          success(req.responseText);
        }
      }
    };
    req.open("GET", url, true);
    req.send(null);
    return req;
  }
});
