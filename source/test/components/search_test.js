import React from 'react';
import reactDom, { renderToStaticMarkup as render } from 'react-dom/server';
import test from 'tape';
import dom from 'cheerio';

import Search from 'components/search';

test('Search', assert => {

  const el = <Search />;
  const $ = dom.load(render(el));
  const output = $.html();
  const actual = (/Search/).test(output);
  const expected = true;

  assert.equal(actual, expected,
    'should output the correct title text');

  assert.end();
});
