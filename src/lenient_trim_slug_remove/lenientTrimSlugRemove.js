import slugify from 'slugify';

/**
 * The default string trimmy sluggy compacty functions returns a lowercased
 * version of the string without any whitespace and special character. Leniency
 * means it will not break if anything other than string is injected. Use
 * Strinct version for string only param type
 *
 * @example
 *   const personFullName =
 *     '  Dr. Emily "Am-ly" Patterson, 12nd Chief Medical Officer and Director of Research at Mercy General Hospital #2/23. ';
 *
 *   const uglySluggy = lenientTrimSlugRemove(personFullName);
 *
 *   console.log('uglySluggy', uglySluggy);
 *
 *   // Output:
 *   // uglySluggy dremilyamlypatterson12ndchiefmedicalofficeranddirectorofresearchatmercygeneralhospital223
 *
 * @param {string | any} maybeString
 * @returns {string}
 */
const lenientTrimSlugRemove = (maybeString) => {
  if (typeof maybeString === 'string') {
    const trimmed = maybeString.trim();

    const generatedNameStringSlug = slugify(trimmed, {
      lower: true,
      remove: /[^\d\w]/g,
    });

    return generatedNameStringSlug;
  }

  return '';
};

export { lenientTrimSlugRemove };

export default lenientTrimSlugRemove;
