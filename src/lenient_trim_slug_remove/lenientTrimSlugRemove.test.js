import { test, expect } from '@jest/globals';

import { lenientTrimSlugRemove } from './lenientTrimSlugRemove';

test('should return parsed string', () => {
  const testString =
    '  Dr. Emily "Am-ly" Patterson, 12nd Chief Medical Officer and Director of Research at Mercy General Hospital #2/23. ';

  const ugly = lenientTrimSlugRemove(testString);

  expect(ugly).toStrictEqual(
    'dremilyamlypatterson12ndchiefmedicalofficeranddirectorofresearchatmercygeneralhospital223'
  );
});

test('should return empty string', () => {
  const testString = '';

  const ugly = lenientTrimSlugRemove(testString);

  expect(ugly).toStrictEqual('');
});

test('should return empty string even if input is not a proper string', () => {
  const testString1 = ['asd'];
  const testString2 = null;
  const testString3 = undefined;
  const testString4 = new Date();
  const testString5 = Buffer.from('asd');

  const ugly1 = lenientTrimSlugRemove(testString1);
  const ugly2 = lenientTrimSlugRemove(testString2);
  const ugly3 = lenientTrimSlugRemove(testString3);
  const ugly4 = lenientTrimSlugRemove(testString4);
  const ugly5 = lenientTrimSlugRemove(testString5);

  expect(ugly1).toStrictEqual('');
  expect(ugly2).toStrictEqual('');
  expect(ugly3).toStrictEqual('');
  expect(ugly4).toStrictEqual('');
  expect(ugly5).toStrictEqual('');
});
