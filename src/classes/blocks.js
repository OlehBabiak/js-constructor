import {row, col, css} from '../utils'

class Block {
	constructor(value, options) {
		this.value = value
		this.options = options
	}
	toHTML(){
		throw new Error('Немає методу toHTML')
	}
}

export class TitleBlock extends Block{
	constructor(value, options) {
		super(value, options);
	}
	toHTML() {
		const {tag = 'h1', styles} = this.options
		return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
	}
}
export class ColumnsBlock extends Block{
	constructor(value, options) {
		super(value, options);
	}
	toHTML() {
		const html = this.value.map(/*`<div class="col-sm">${item}</div>`*/ col).join(' ')
// 	return `
// 	<div class="row">
// 	${html.join('')}
// </div>
// 	`
		return row(html, css(this.options.styles))
	}
}
export class ImageBlock extends Block{
	constructor(value, options) {
		super(value, options);
	}
	toHTML() {
		// 	return `
// 	<div class="row">
// 	<img src="${block.value}"/>
// </div>
// 	`
		const {styles, alt = '', imageStyles: is} = this.options
		return row(`<img src="${this.value}" alt="${alt}" style="${css(is)}"/>`, css(styles))
	}
}
export class TextBlock extends Block{
	constructor(value, options) {
		super(value, options);
	}
	toHTML() {
		return row(col(`<p>${this.value}</p>`), css(this.options.styles))
	}
}

// Якщо ми захочемо додати новий блок, додаєм сюди новий клас, наслідуємся від Блок