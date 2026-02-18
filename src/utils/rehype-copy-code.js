
import { visit } from 'unist-util-visit';
import { h } from 'hastscript';

export default function rehypeCopyCode() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName === 'pre' && node.children[0]?.tagName === 'code') {
        const codeNode = node.children[0];
        const codeText = codeNode.children.map(child => child.value).join('');

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
