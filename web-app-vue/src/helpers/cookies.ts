export default class Cookies {
  static get(name: string): string | null {
    const matches = document.cookie.match(new RegExp(`(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`));
    return matches ? decodeURIComponent(matches[1]) : null;
  }
  static set(name: string, value: string, props: any): void {
    props = props || {};
    let exp = props.expires;

    if (typeof exp == 'number' && exp) {
      const d = new Date();
      d.setTime(d.getTime() + exp * 1000);
      exp = d;
    }

    if (exp && exp.toUTCString) props.expires = exp.toUTCString();

    if (props.path == null) props.path = '/';

    value = encodeURIComponent(value);
    let updatedCookie = `${name}=${value}`;
    for (const propName in props) {
      if (props.hasOwnProperty(propName)) {
        updatedCookie += `; ${propName}`;
        const propValue = props[propName];
        if (propValue !== true) updatedCookie += `=${propValue}`;
      }
    }
    document.cookie = updatedCookie;
  }
  static delete(name: string, props: any = null) {
    props = props == null ? { expires: -1, path: '/' } : props;
    this.set(name, '', props);
  }
}
