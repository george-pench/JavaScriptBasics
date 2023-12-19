"use strict";

function textFormatter(text, max_size, max_lines, format_type = "no wrap") {
  if (text.length > max_size) {
    text = text.substring(0, max_size);
  }

  switch (format_type) {
    case "word wrap":
      return wordWrap(text, max_lines);
    case "character wrap":
      return characterWrap(text, max_lines);
    case "sentence wrap":
      return sentenceWrap(text, max_lines);
    case "no wrap":
    default:
      return noWrap(text, max_lines);
  }
}

function wordWrap(text, max_lines) {
  let lines = [];
  let words = text.split(" ");
  let currentLine = words[0];

  for (let i = 1; i < words.length; i++) {
    let length = currentLine.length + words[i].length;

    if (length + 1 <= max_lines) {
      currentLine += " " + words[i];
    } else {
      lines.push(currentLine);
      currentLine = words[i];
    }
  }

  lines.push(currentLine);
  return lines.join("\n");
}

function characterWrap(text, max_lines) {
  let lines = [];

  for (let i = 0; i < text.length; i += max_lines) {
    lines.push(text.substring(i, Math.min(i + max_lines, text.length)));
  }
  return lines.join("\n");
}

function sentenceWrap(text, max_lines) {
  let lines = [];
  let sentences = text.match(/[^\.!\?]+[\.!\?]+/g) || [];
  let currentLine = sentences[0] || "";

  for (let i = 1; i < sentences.length; i++) {
    if (currentLine.length + sentences[i].length + 1 <= max_lines) {
      currentLine += " " + sentences[i];
    } else {
      lines.push(currentLine);
      currentLine = sentences[i];
    }
  }

  lines.push(currentLine);
  return lines.join("\n");
}

function noWrap(text, max_lines) {
  return text.split("\n").slice(0, max_lines).join("\n");
}
