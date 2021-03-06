export function row(content, styles= '') {
	return `<div class="row" style="${styles}">${content}</div>`
}
export function col(content) {
	return `<div class="col-sm">${content}</div>`
}

export function css(styles = {}) {  //проходимо по обэкту styles
	// const keys = Object.keys(styles)  //отримуємо масив ключів обєкта
	// const array = keys.map(key => {   //отримуємо масив ключ: значення обєкта
	// 	return `${key}: ${styles[key]}`
	// 	})
	// return array.join(';') //розбиваємо масив на строки з розділювачем ';'
	if (typeof styles ==='string') return styles
	const toString = key=> `${key}: ${styles[key]}`
	return Object.keys(styles).map(toString).join(';') // записуємо все в одну строку
	
}

export function block(type) {
	return `
    <form name="${type}">
      <h5>${type}</h5>
      <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="value">
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" name="styles" placeholder="styles">
      </div>
      <button type="submit" class="btn btn-primary btn-sm">Додати</button>
    </form>
    <hr />
  `
}