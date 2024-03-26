// Copyright (c) 2024 Mr. Coxall All rights reserved
//
// Created by: Calista.E
// Created on: Mar 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a parallaelogram.
 */
function calculateAreaOfParallaelogram () {
  // input
  const baseOfParallaelogram = parseInt(document.getElementById('base-of-parallaelogram').value)
  const heightOfParallaelogram = parseInt(document.getElementById('height-of-parallaelogram').value)

  // process
  const areaOfParallaelogram = baseOfParallaelogram * heightOfParallaelogram

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + areaOfParallaelogram + ' cm²'
}
