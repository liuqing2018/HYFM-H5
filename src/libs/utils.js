import moment from 'moment';

export default {
	formatTime(time, format = 'YYYY-MM-DD HH:mm:ss') {
		if (!time) {
			return '';
		}
		return moment.unix(time / 1000).format(format);
	}
}
