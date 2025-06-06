import React from 'react';

const ComparisonTable = () => {
  return (
    <section className="comparison" id="comparison">
      <div className="container">
        <h2>VibeSense vs. Traditional Security</h2>
        <p className="section-subheading">
          See how our modern solution outperforms conventional security methods
        </p>
        
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Features</th>
                <th>Physical Lock</th>
                <th>Built-in Alarm</th>
                <th>VibeSense</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Affordable Price</td>
                <td>✅</td>
                <td>❌</td>
                <td className="highlight">✅</td>
              </tr>
              <tr>
                <td>Easy Installation</td>
                <td>✅</td>
                <td>❌</td>
                <td className="highlight">✅</td>
              </tr>
              <tr>
                <td>Automatic Alarm</td>
                <td>❌</td>
                <td>✅</td>
                <td className="highlight">✅</td>
              </tr>
              <tr>
                <td>Mobile Notifications</td>
                <td>❌</td>
                <td>❌</td>
                <td className="highlight">✅</td>
              </tr>
              <tr>
                <td>Works with Bicycles</td>
                <td>❌</td>
                <td>❌</td>
                <td className="highlight">✅</td>
              </tr>
              <tr>
                <td>Portable Between Vehicles</td>
                <td>❌</td>
                <td>❌</td>
                <td className="highlight">✅</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;