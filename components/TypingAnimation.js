import Script from 'next/script'
import React, { /*  useState,  */ useEffect } from 'react'

export default function TypingAnimation({
  actions,
  uniqueID,
  loop = false,
  cursorBlink = '.75s',
  ...rest
}) {
  useEffect(() => {
    // Based on: https://usefulangle.com/post/75/typing-effect-animation-javascript-css
    // var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
    // const loop = ${loop}

    // var actions = ${JSON.stringify(actions)}; // List of objects, each content fragment and ms
    var actionIdx = 0 // Current fragment being processed

    var innerHTML = ''
    var deleteIdx = null // initially, index of char in innerHTML of char to be deleted first (larger number than deleteEnd)
    var deleteEnd = null // last index of char in innerHTML to be deleted (deleteIdx <= deleteIdx)

    const el = document.querySelector(`#typing-animation-${uniqueID}`) // Element that holds the innerHTML

    let defaults = {
      type: { delay: 200, rate: 100 },
      delete: { delay: 1000, rate: 50 },
      insert: { delay: 0, rate: 0 },
    }

    // default is no delay before first action, which should always by 'type'
    // or, if other actions are supported later, at least never 'delete'
    var contentIdx = 0 // Character number of the current action's content being typed
    if (actions[0].action === 'type') actions[0].delay ??= 0

    for (let i = 1; i < actions.length; ++i) {
      let action = actions[i].action
      defaults[action].delay = actions[i].delay ??= defaults[action].delay
      defaults[action].rate = actions[i].rate ??= defaults[action].rate
    }

    // Again, the first action is assumed to be 'type' and if other actions are supported later
    // we'll need to account for them here:

    var interval = null

    if (actions[0].action === 'type') typeAction()
    else if (actions[0].action === 'insert') insertAction()

    function typeAction() {
      // Implements typing effect
      if (actions[actionIdx].delay !== 0) {
        setTimeout(() => {
          interval = setInterval(typeChars, actions[actionIdx].rate)
        }, actions[actionIdx].delay) // after some time.
      } else interval = setInterval(typeChars, actions[actionIdx].rate)

      function typeChars() {
        el.innerHTML = innerHTML += actions[actionIdx].content[contentIdx++]
        if (contentIdx === actions[actionIdx].content.length) nextAction()
      }
    }

    function insertAction() {
      if (actions[actionIdx].delay === 0) insertContent()
      else
        setTimeout(() => {
          insertContent()
        }, actions[actionIdx].delay)

      function insertContent() {
        el.innerHTML = innerHTML += actions[actionIdx].content
        nextAction()
      }
    }

    function deleteAction() {
      // Implements deleting effect
      if (actions[actionIdx].rate !== 0) {
        if (actions[actionIdx].delay !== 0) {
          setTimeout(() => {
            interval = setInterval(deleteChars, actions[actionIdx].rate)
          }, actions[actionIdx].delay) // after some time.
        } else interval = setInterval(deleteChars, actions[actionIdx].rate)
      } else if (actions[actionIdx].delay === 0) deleteContent()
      else
        setTimeout(() => {
          deleteContent()
        }, actions[actionIdx].delay)

      function deleteChars() {
        el.innerHTML = innerHTML = innerHTML.substring(0, deleteIdx--)
        if (deleteIdx <= deleteEnd) nextAction()
      }
      function deleteContent() {
        el.innerHTML = innerHTML = innerHTML.substring(0, deleteEnd)
        nextAction()
      }
    }

    function nextAction() {
      clearInterval(interval)
      contentIdx = 0
      actionIdx++

      if (actionIdx >= actions.length) {
        if (!loop) {
          // audio.play();
          return
        } else {
          actionIdx = 0
        }
      }
      if (actions[actionIdx].action === 'type') {
        typeAction()
      } else if (actions[actionIdx].action === 'insert') {
        insertAction()
      } else if (actions[actionIdx].action === 'delete') {
        // default is to delete one, the previous type action's content:
        actions[actionIdx].chars ??= actions[actionIdx - 1].content.length

        deleteIdx = innerHTML.length - 1 // set deleteIdx and temp for deleteEnd to last index.
        if (actions[actionIdx].chars === 'all') deleteEnd = -1
        else deleteEnd = deleteIdx - actions[actionIdx].chars
        deleteAction()
      }
    }
  }, [])
  return (
    <>
      <span id={`typing-animation-${uniqueID}`} style={{ whiteSpace: 'pre' }} {...rest}></span>
      <span
        id={`cursor-${uniqueID}`}
        className="ml-0.5 inline-block h-4 w-2 bg-orange-500 align-middle"
        style={{ animation: `blink ${cursorBlink} step-end infinite` }}
      ></span>
    </>
  )
}
