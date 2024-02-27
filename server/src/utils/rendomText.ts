function generateRandomText(filename: string): string {
  // Split the filename and extension
  const parts = filename.split('.');
  const name = parts.slice(0, -1).join('.');
  const extension = parts[parts.length - 1];

  // Generate random text
  const randomText = Math.random().toString(36).substring(2, 10);

  // Construct the new filename with random text before extension
  const newFilename = name + '_' + '(' + randomText + ')' + '.' + extension;

  return newFilename;
}

export default generateRandomText;
