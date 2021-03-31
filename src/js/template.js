export const spanTemplate = (direction, content) => {
	const units = direction === 'next' ? '-100' : '100';
	return `<span style="transform: translateX(${units}px);">${content}</span>`;
};

export const previewCellTemplate = (classList, content) =>
	`<div class="${classList}"><span>${content}</span></div>`;

export default `<div class="mc-display">
<div class="mc-display__header">
<h3 class="mc-display__day">Thursday</h3>
</div>
<div class="mc-display__body">
<div class="mc-display__data mc-display__data--primary">
<h1 class="mc-display__date">1</h1>
</div>
<div class="mc-display__data mc-display__data--secondary">
<h3 class="mc-display__month">January</h3>
<h2 class="mc-display__year">1970</h2>
</div>
</div>
</div>
<div class="mc-picker">
<div class="mc-picker__header mc-container">
<div class="mc-select__month">
<button id="mc-picker__month--prev" class="mc-select__nav mc-select__nav--prev">
<svg class="icon-angle icon-angle--left" viewBox="0 0 256 512" width='10px' height='100%'>
<path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" />
</svg>
</button>
<div id="mc-current--month" class="mc-select__data mc-select__data--month">
<span>January</span>
</div>
<button id="mc-picker__month--next" class="mc-select__nav mc-select__nav--next">
<svg class="icon-angle icon-angle--right" viewBox="0 0 256 512" width='10px' height='100%'>
<path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
</svg>
</button>
</div>
<div class="mc-select__year">
<button id="mc-picker__year--prev" class="mc-select__nav mc-select__nav--prev">
<svg class="icon-angle icon-angle--left" viewBox="0 0 256 512" width='10px' height='100%'>
<path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" />
</svg>
</button>
<div id="mc-current--year" class="mc-select__data mc-select__data--year">
<span>1970</span>
</div>
<button id="mc-picker__year--next" class="mc-select__nav mc-select__nav--next">
<svg class="icon-angle icon-angle--right" viewBox="0 0 256 512" width='10px' height='100%'>
<path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
</svg>
</button>
</div>
</div>
<div class="mc-picker__body">
<table class="mc-table mc-container">
<thead class="mc-table__header">
<tr>
<th class="mc-table__weekday">S</th>
<th class="mc-table__weekday">M</th>
<th class="mc-table__weekday">T</th>
<th class="mc-table__weekday">W</th>
<th class="mc-table__weekday">T</th>
<th class="mc-table__weekday">F</th>
<th class="mc-table__weekday">S</th>
</tr>
</thead>
<tbody class="mc-table__body">
<tr class="mc-table__week">
<td class="mc-date mc-date--inactive" data-val-date="">28</td>
<td class="mc-date mc-date--inactive" data-val-date="">29</td>
<td class="mc-date mc-date--inactive" data-val-date="">30</td>
<td class="mc-date mc-date--inactive" data-val-date="">31</td>
<td class="mc-date mc-date--active" data-val-date="">1</td>
<td class="mc-date mc-date--active" data-val-date="">2</td>
<td class="mc-date mc-date--active" data-val-date="">3</td>
</tr>
<tr class="mc-table__week">
<td class="mc-date mc-date--active" data-val-date="">4</td>
<td class="mc-date mc-date--active" data-val-date="">5</td>
<td class="mc-date mc-date--active" data-val-date="">6</td>
<td class="mc-date mc-date--active" data-val-date="">7</td>
<td class="mc-date mc-date--active" data-val-date="">8</td>
<td class="mc-date mc-date--active" data-val-date="">9</td>
<td class="mc-date mc-date--active" data-val-date="">10</td>
</tr>
<tr class="mc-table__week">
<td class="mc-date mc-date--active" data-val-date="">11</td>
<td class="mc-date mc-date--active" data-val-date="">12</td>
<td class="mc-date mc-date--active" data-val-date="">13</td>
<td class="mc-date mc-date--active" data-val-date="">14</td>
<td class="mc-date mc-date--active" data-val-date="">15</td>
<td class="mc-date mc-date--active" data-val-date="">16</td>
<td class="mc-date mc-date--active" data-val-date="">17</td>
</tr>
<tr class="mc-table__week">
<td class="mc-date mc-date--active" data-val-date="">18</td>
<td class="mc-date mc-date--active" data-val-date="">19</td>
<td class="mc-date mc-date--active" data-val-date="">20</td>
<td class="mc-date mc-date--active" data-val-date="">21</td>
<td class="mc-date mc-date--active" data-val-date="">22</td>
<td class="mc-date mc-date--active" data-val-date="">23</td>
<td class="mc-date mc-date--active" data-val-date="">24</td>
</tr>
<tr class="mc-table__week">
<td class="mc-date mc-date--active" data-val-date="">25</td>
<td class="mc-date mc-date--active" data-val-date="">26</td>
<td class="mc-date mc-date--active" data-val-date="">27</td>
<td class="mc-date mc-date--active" data-val-date="">28</td>
<td class="mc-date mc-date--active" data-val-date="">29</td>
<td class="mc-date mc-date--active" data-val-date="">30</td>
<td class="mc-date mc-date--active" data-val-date="">31</td>
</tr>
<tr class="mc-table__week">
<td class="mc-date mc-date--inactive" data-val-date="">1</td>
<td class="mc-date mc-date--inactive" data-val-date="">2</td>
<td class="mc-date mc-date--inactive" data-val-date="">3</td>
<td class="mc-date mc-date--inactive" data-val-date="">4</td>
<td class="mc-date mc-date--inactive" data-val-date="">5</td>
<td class="mc-date mc-date--inactive" data-val-date="">6</td>
<td class="mc-date mc-date--inactive" data-val-date="">7</td>
</tr>
</tbody>
</table>
<div class="mc-month-year__preview mc-month-year__preview--opened">
<div class="mc-month-year__cell"><span>Jan</span></div>
<div class="mc-month-year__cell"><span>Feb</span></div>
<div class="mc-month-year__cell mc-month-year__cell--picked"><span>Mar</span></div>
<div class="mc-month-year__cell"><span>Apr</span></div>
<div class="mc-month-year__cell"><span>May</span></div>
<div class="mc-month-year__cell"><span>Jun</span></div>
<div class="mc-month-year__cell"><span>Jul</span></div>
<div class="mc-month-year__cell mc-month-year__cell--inactive"><span>Aug</span></div>
<div class="mc-month-year__cell"><span>Sep</span></div>
<div class="mc-month-year__cell"><span>Oct</span></div>
<div class="mc-month-year__cell"><span>Nov</span></div>
<div class="mc-month-year__cell"><span>Dec</span></div>
</div>
</div>
<div class="mc-picker__footer mc-container">
<div class="mc-footer__section mc-footer__section--primary">
<button id="mc-btn__clear" class="mc-btn mc-btn--danger">Clear</button>
</div>
<div class="mc-footer__section mc-footer__section--secondary">
<button id="mc-btn__cancel" class="mc-btn mc-btn--success">CANCEL</button>
<button id="mc-btn__ok" class="mc-btn mc-btn--success">OK</button>
</div>
</div>
</div>`;
