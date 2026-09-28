import type { Mockup as MockupKind } from '@/content/types';
import BuilderMockup from './BuilderMockup';
import TradingArchitecture from './TradingArchitecture';

export default function Mockup({ kind }: { kind: MockupKind }) {
  return kind === 'builder' ? <BuilderMockup /> : <TradingArchitecture />;
}
