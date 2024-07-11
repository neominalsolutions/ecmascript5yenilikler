import MyButton, { getFullName, getName, User } from './06_export';
import * as testModule from './06_export';
// namespace tanımı ve böylece aynı isimde olan sınıfların bir namespace ile birbirinden ayrılmasını sağlamış oluyor.

getName();
getFullName();
const user = new User();
MyButton();

// module üzerinden export edilen dosyalara erişim sağlanabiliyor.
testModule.default(); //MyButton
testModule.getFullName();
