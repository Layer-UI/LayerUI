


export function extractFilesAndPackages(code: string) {
    // Split code into lines
    const lines = code.split('\n');

    // Initialize arrays to store file imports and package imports
    const fileImports: string[] = [];
    let packageImports: string = 'npm install';

    // Regular expressions to match file imports (paths starting with '@') and package imports
    const fileRegex = /['"]@(.*?)['"]/;  // Matches imports starting with @
    const packageRegex = /import .* from ['"]([^@].*?)['"]/;  // Matches anything not starting with @

    // Iterate through each line to extract imports
    lines.forEach(line => {
        if (fileRegex.test(line)) {
            const match = line.match(fileRegex);
            if (match && match[1] !== '/lib/utils') {
                fileImports.push(match[0].replace(/['"]/g, ''));  // Remove quotes
            }
        } else if (packageRegex.test(line)) {
            const match = line.match(packageRegex);
            if (match && match[1] !== 'react') {
                packageImports = packageImports + ' ' + (match[1]);  // Get the package name
            }
        }
    });

    return { fileImports, packageImports };
}