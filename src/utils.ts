/**
 * Mixin the lazy class to the element
 * @param className string the class name to add
 * @return string the class name to add to the element
 */
export function lazyClassName(className?: string): string {
	return className ? className + " lazy" : "lazy";
}
