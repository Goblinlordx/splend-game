if ('registerElement' in document
  && 'createShadowRoot' in HTMLElement.prototype
  && 'import' in document.createElement('link')
  && 'content' in document.createElement('template')) {
      console.log('Native webcomponent support detected')
      // Native webcomponent support detected
  } else {
      document.write(
        '<script src="bower_components/webcomponentsjs/webcomponents.js"></script>'
      );
  };