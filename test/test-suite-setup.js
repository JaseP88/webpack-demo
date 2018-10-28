import chai from 'chai';
import sinonChai from 'sinon-chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import jsdom from 'jsdom';

// utilize chai plugin sinonChai
chai.use(sinonChai);

// configure Enzyme Adapter
configure({ adapter: new Adapter() });

// setup up jsdom to use with enzyme mount
const {JSDOM} = jsdom;
const {document} = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;
global.window = document.defaultView;