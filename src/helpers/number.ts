export const rupiah = (rp: number, fraction?: number) =>
	new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
		maximumFractionDigits: 0 || fraction,
	}).format(rp);

export const isDecimal = (nilai: number) => nilai % 1 !== 0;
