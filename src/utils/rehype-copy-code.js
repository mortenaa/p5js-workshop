
import { visit } from 'unist-util-visit';
import { h } from 'hastscript';

// Recursively collect all text from a code node, including nested spans
function getText(node) {
  if (!node) return '';
  if (node.type === 'text') {
    return node.value || '';
  }
  if (!Array.isArray(node.children)) {
    return '';
  }
  return node.children.map(child => getText(child)).join('');
}

export default function rehypeCopyCode() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (!parent) return;
      if (node.tagName === 'pre' && node.children[0]?.tagName === 'code') {
        const codeNode = node.children[0];
        const codeText = getText(codeNode);
        
        const copyButton = h(
          'button',
          {
            class: 'copy-btn',
            type: 'button',
            'data-code': codeText,
            'aria-label': 'Kopier kode til utklippstavlen',
          },
          'Kopier'
        );

        const wrapper = h(
          'div',
          {
            class: 'code-wrapper',
          },
          [node, copyButton]
        );

        parent.children[index] = wrapper;
      }
    });
  };
}
