import './style.scss';

interface Search {
  text?: string,
  bgColor?: string,
  textColor?: string,
  shadowColor?: string
}
const searchKeys: (keyof Search)[] = ['text', 'bgColor', 'textColor', 'shadowColor'];

const searchToString = (search: Search) => {
  let query = '';

  if(search.text !== undefined) {
    query += `&text=${window.encodeURIComponent(search.text)}`;
  }
  if(search.bgColor !== undefined) {
    query += `&bgColor=${window.encodeURIComponent(search.bgColor)}`;
  }
  if(search.textColor !== undefined) {
    query += `&textColor=${window.encodeURIComponent(search.textColor)}`;
  }
  if(search.shadowColor !== undefined) {
    query += `&shadowColor=${window.encodeURIComponent(search.shadowColor)}`;
  }

  if(query.length > 0) {
    query = '?' + query.slice(1);
  }

  return query;
}

const updateQuery = function(search: Search): void {
  const query = searchToString(search);
  window.history.replaceState(null, '', `${window.location.pathname}${query}`);
}

const parseQuery = function(query: string): Map<string, string> {
  const querySet = new Map<string, string>();

  query.slice(1).split('&').forEach((str) => {
    const [left, right] = str.split('=');
    if(right !== undefined) {
      querySet.set(left, right);
    }
  });

  return querySet;
}

window.addEventListener('load', () => {
  document.querySelector('#tweet')?.addEventListener('click', () => {
    const tweetText = window.location.href;

    const link = document.createElement('a');
    link.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;

    link.click();
  });

  const elMain = <HTMLElement | null>document.querySelector('main');
  const elTextarea = <HTMLTextAreaElement | null>document.querySelector('#text textarea');
  const elInputColorBg = <HTMLInputElement | null>document.getElementById('color_bg');
  const elInputColorText = <HTMLInputElement | null>document.getElementById('color_text');
  const elInputColorShadow = <HTMLInputElement | null>document.getElementById('color_shadow');

  if(elMain === null) {
    throw Error('elMain is null');
  }
  if(elTextarea === null) {
    throw Error('elTextarea is null');
  }
  if(elInputColorBg === null) {
    throw Error('elInputColorBg is null');
  }
  if(elInputColorText === null) {
    throw Error('elInputColorText is null');
  }
  if(elInputColorShadow === null) {
    throw Error('elInputColorShadow is null');
  }

  let search: Search = {};
  const query = parseQuery(window.location.search);
  searchKeys.forEach(key => {
    if(query.has(key)) {
      const value = decodeURIComponent(<string>query.get(key));
      search[key] = value;

      switch(key) {
      case 'text':
        elTextarea.value = value;
        break;
      case 'bgColor':
        elInputColorBg.value = value;
        elMain.style.setProperty('--bg-color', value);
        search.bgColor = value;
        break;
      case 'textColor':
        elInputColorText.value = value;
        elMain.style.setProperty('--text-color', value);
        search.textColor = value;
        break;
      case 'shadowColor':
        elInputColorShadow.value = value;
        elMain.style.setProperty('--shadow-color', value);
        search.shadowColor = value;
        break;
      }
    }
  });

  elTextarea.addEventListener('input', () => {
    search.text = elTextarea.value;
    updateQuery(search);
  });
  elInputColorBg.addEventListener('input', () => {
    elMain.style.setProperty('--bg-color', elInputColorBg.value);
    search.bgColor = elInputColorBg.value;
    updateQuery(search);
  });
  elInputColorText.addEventListener('input', () => {
    elMain.style.setProperty('--text-color', elInputColorText.value);
    search.textColor = elInputColorText.value;
    updateQuery(search);
  });
  elInputColorShadow.addEventListener('input', () => {
    elMain.style.setProperty('--shadow-color', elInputColorShadow.value);
    search.shadowColor = elInputColorShadow.value;
    updateQuery(search);
  });
});