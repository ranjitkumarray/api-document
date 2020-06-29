import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'prettyprint'
})
export class PrettyPrintPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) { }
  transform(val): SafeHtml {
    var xData = JSON.stringify(val, undefined, 4)
    var json = xData.replace(/ /g, '&nbsp;')
      .replace(/\n/g, '<br/>').replace(/\s/g, "");
    var data = json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
      var cls = 'number';
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = 'key';
        } else {
          cls = 'string';
        }
      } else if (/true|false/.test(match)) {
        cls = 'boolean';
      } else if (/null/.test(match)) {
        cls = 'null';
      }
      return '<span class="' + cls + '">' + match + '</span>';
    });
    return this.domSanitizer.bypassSecurityTrustHtml(data);
  }

}