window.addEventListener('DOMContentLoaded', function() {
    var container = document.getElementById('container');
    
    // Create the button element
    var customButton = document.createElement('button');
    customButton.id = 'custom-button';
    customButton.textContent = 'Custom';
    
    // Append the button to the container
    container.appendChild(customButton);

    var showblocks = $('.finance.show');
    showblocks.each(function() {
        var block = $(this);
        //console.log(block);
        var eyeIcon = $('<img>').attr('src', 'images/eye-open.png');
        eyeIcon.addClass('eye-icon open-eye');
        block.append(eyeIcon);
    });
    var hideblocks = $('.finance.hide');
    hideblocks.each(function() {
        var block = $(this);
        //console.log(block);
        var eyeIcon = $('<img>').attr('src', 'images/eye-close.png');
        eyeIcon.addClass('eye-icon close-eye');
        block.append(eyeIcon);
    });
    // var eyeIconshow = $('<img>').attr('src', 'images/eye-open.png');
    // var eyeIconhide = $('<img>').attr('src', 'images/eye-close.png');
    // eyeIconshow.addClass('eye-icon open-eye');
    // eyeIconhide.addClass('eye-icon close-eye');
    // var hideBlocks = $('.finance.hide');
    // var showBlocks = $('.finance.show');
    // //console.log(showBlocks);
    // showBlocks.each(function() {
    //     //var block = $(this);
    //     //console.log(block);
    //     $(this).append(eyeIconshow);
    // });
    // hideBlocks.each(function() {
    //     var block = $(this);
    //     console.log(block);
    //     $(this).append(eyeIconhide);
    // });
    $('.finance.hide').hide();
    $('.eye-icon').hide();

    
});


$(document).ready(function() {
var customButton = $('#custom-button');
var blocks = $('.finance');
var isCustomizing = false;

customButton.on('click', function() {
    if (isCustomizing) {
    disableCustomization();
    saveCustomization();
    } else {
    enableCustomization();
    }
});

function enableCustomization() {
    //a = 0;
    isCustomizing = true;
    customButton.text('Save');
    //console.log('enableCustomization');

    // Enable drag-and-drop
    enableDragAndDrop();
    blocks.show();
    // Show eye icons and bind click event
    blocks.each(function() {
    var block = $(this);
    block.css('border', '1px dashed red');
    var eyeIcon = block.children('img.eye-icon');
    eyeIcon.show();
    eyeIcon.unbind().click(function() {
        toggleVisibility(eyeIcon);
    });
    //eyeIcon.on('click', toggleVisibility);
    //var eyeIcon = $('<img>').attr('src', 'images/eye-open.png');
    // eyeIcon.addClass('eye-icon open-eye');
    //block.append(eyeIcon);
    });
    // var parentBlock = document.querySelector('.finance');
    // $('.finance').on('click', '.eye-icon', toggleVisibility);


}

function disableCustomization() {
    isCustomizing = false;
    customButton.text('Custom');

    // Disable drag-and-drop
    disableDragAndDrop();

    // Remove eye icons and border boxes
    $('.eye-icon').hide();
    blocks.css('border', 'none');
    var blocksToRemove = $('.finance:has(> img.eye-icon.close-eye)');
    blocksToRemove.hide();
    //console.log('disableCustomization');
    //console.log('blocksToRemove', blocksToRemove);
}

function toggleVisibility(eyeIcon) {
    //var eyeIcon = $(this);
    //console.log('eyeIcon', eyeIcon);
    var block = eyeIcon.parent();
    //console.log(block.children('h2').text());
    //var imgElement = block.children('img');

    if (eyeIcon.hasClass('open-eye')) {
    //block.css('display', 'none');
    //console.log('openeyeclicked');
    //eyeIcon.removeClass('open-eye').addClass('close-eye');
    eyeIcon.attr('src', 'images/eye-close.png');
    eyeIcon.removeClass('open-eye').addClass('close-eye');
    moveBlockToLast(block);
    } else{
    //console.log('block', block);
    //block.css('display', 'block');
    //eyeIcon.removeClass('close-eye').addClass('open-eye');
    //console.log('closeeyeclicked');
    eyeIcon.attr('src', 'images/eye-open.png');
    eyeIcon.removeClass('close-eye').addClass('open-eye');
    moveBlockToFirst(block);
    }
    return;
}

function moveBlockToFirst(block) {
    //console.log('moveBlockToFirst');
    var parent = block.parent();
    parent.prepend(block);
}

function moveBlockToLast(block) {
    //console.log('moveBlockToLast');
    var parent = block.parent();
    parent.append(block);
}

function enableDragAndDrop() {
    blocks.attr('draggable', true);
    blocks.on('dragstart', dragStart);
    blocks.on('dragover', dragOver);
    blocks.on('dragleave', dragLeave);
    blocks.on('drop', drop);
}

function disableDragAndDrop() {
    blocks.attr('draggable', false);
    blocks.off('dragstart', dragStart);
    blocks.off('dragover', dragOver);
    blocks.off('dragleave', dragLeave);
    blocks.off('drop', drop);
}

var draggedBlock = null;

function dragStart(event) {
    draggedBlock = $(this)[0];
    event.originalEvent.dataTransfer.effectAllowed = 'move';
}

function dragOver(event) {
    event.preventDefault();
    event.originalEvent.dataTransfer.dropEffect = 'move';

    $(this).css('border', '5px solid pink');
}

function dragLeave(event) {
    $(this).css('border', '1px dashed red');
}

function drop(event) {
    event.preventDefault();
    $(this).css('border', '1px dashed red');

    var targetBlock = $(this)[0];
    var parent = targetBlock.parentNode;

    if ($(this).hasClass('eye-icon')) {
    targetBlock = $(this).parent()[0];
    }

    if (targetBlock === draggedBlock) {
    return;
    }

    $(draggedBlock).insertAfter(targetBlock);
}

function saveCustomization() {
    //console.log('saveCustomization');
    var AllBlocks = [];
    Blocks = $('.finance');
    Blocks.each(function() {
    var block = $(this);
    if (block.css('display') !== 'none') {
        AllBlocks.push([block.attr('id'),'visible']);
    }
    else{
        AllBlocks.push([block.attr('id'),'hidden']);
    }
    });
    //console.log('AllBlocks', AllBlocks);
    //var preferencesString = JSON.stringify(AllBlocks);
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    // var user_id = '';
    // // Iterate through each element in the cookie array
    // for (var i = 0; i < ca.length; i++) {
    //     var cookie = ca[i].trim(); // Remove leading/trailing whitespace
    
    //     // Check if the cookie starts with "user_id="
    //     if (cookie.indexOf('user_id=') === 0) {
    //     user_id = cookie.split('=')[1]; // Get the value after "="
    //     break; // Exit the loop once the user_id is found
    //     }
    // }
    // var data = {
    //     userId: user_id,
    //     preference: AllBlocks
    //   };
    var currentTime = new Date();
    // Set the expiration time to 5 minutes from the current time
    var expirationTime = new Date(currentTime.getTime() + 5 * 60 * 1000);
    var data = {
        // userId: user_id,
        preference: AllBlocks
      };
    //console.log('data', data);
    //console.log(user_id);
    //console.log('preferencesString', preferencesString);
    $.ajax({
        url: 'http://localhost:9080/',
        type: 'PUT',
        data: JSON.stringify({data}),  // Replace with the user's preferences data
        xhrFields: {
          withCredentials: true
        },
        contentType: 'application/json',
        success: function(response,status,xhr) {
          // Handle successful response
          console.log(response);
          console.log(status);
          // Remove the preference cookie(s)
          //document.cookie = 'preference-cookie='+encodeURIComponent(preferencesString)+'; expires='+expirationTime+'; path=/;';
        },
        error: function(xhr,status,HTTPstatusPhrase) {
          // Handle error response
          console.log('status', status);
        }
    });
}


});